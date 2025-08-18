// src/app/api/waitlist/route.ts
import { NextRequest, NextResponse } from 'next/server'

interface WaitlistData {
  email: string
  name: string
  organizationType: string
  organizationSize?: string
  primaryChallenge?: string
  currentTools?: string[]
  hearAboutUs?: string
  priorityFeature?: string
}

export async function POST(request: NextRequest) {
  try {
    const data: WaitlistData = await request.json()

    // Validate required fields
    if (!data.email || !data.name || !data.organizationType) {
      return NextResponse.json(
        { error: 'Missing required fields: email, name, or organizationType' },
        { status: 400 }
      )
    }

    // Prepare data for Airtable - only include fields that have values
    const airtableData: Record<string, string> = {
      Email: data.email,
      Name: data.name,
      'Organization Type': data.organizationType,
    }

    // Only add optional fields if they have values
    if (data.primaryChallenge) {
      airtableData['Primary Challenge'] = data.primaryChallenge
    }
    
    if (data.currentTools && data.currentTools.length > 0) {
      airtableData['Current Tools'] = data.currentTools.join(', ')
    }
    
    if (data.priorityFeature) {
      airtableData['Priority Feature'] = data.priorityFeature
    }
    
    if (data.hearAboutUs) {
      airtableData['How They Heard'] = data.hearAboutUs
    }

    // Send to Airtable
    const airtableResponse = await fetch(`https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_NAME}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: airtableData
      }),
    })

    if (!airtableResponse.ok) {
      const errorData = await airtableResponse.json()
      console.error('Airtable API Error:', errorData)
      return NextResponse.json(
        { error: 'Failed to save to database' },
        { status: 500 }
      )
    }

    const result = await airtableResponse.json()

    return NextResponse.json({
      success: true,
      message: 'Successfully joined waitlist!',
      id: result.id
    })

  } catch (error) {
    console.error('Waitlist API Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}