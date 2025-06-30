import { NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

const LOG_PATH = path.resolve(process.cwd(), 'public', 'visitlog.json')

export async function GET() {
  try {
    const data = await fs.readFile(LOG_PATH, 'utf-8')
    const logs = JSON.parse(data)
    return NextResponse.json({ 
      success: true, 
      totalVisitors: logs.length,
      recentVisitors: logs.slice(-10) // Last 10 visitors
    })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read logs' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { 
      linkClicked, 
      referrer, 
      pageTitle, 
      userAgent: clientUserAgent, 
      language, 
      screenResolution, 
      timezone 
    } = body || {}
    
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    const userAgent = clientUserAgent || request.headers.get('user-agent') || 'unknown'
    const now = new Date()
    
    // Enhanced OS detection
    let os = 'Unknown'
    let device = 'Unknown'
    if (userAgent.includes('Windows')) os = 'Windows'
    else if (userAgent.includes('Macintosh')) os = 'MacOS'
    else if (userAgent.includes('Linux')) os = 'Linux'
    else if (userAgent.includes('Android')) os = 'Android'
    else if (userAgent.includes('iPhone') || userAgent.includes('iPad')) os = 'iOS'
    
    if (/Mobile|Android|iPhone|iPad/i.test(userAgent)) device = 'Mobile'
    else device = 'Desktop'

    // Enhanced time and date formatting
    const timestamp = now.toISOString()
    const date = now.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
    const time = now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short'
    })

    // Read existing logs
    let logs = []
    try {
      const data = await fs.readFile(LOG_PATH, 'utf-8')
      logs = JSON.parse(data)
    } catch (e) {
      logs = []
    }
    
    // Add new log with enhanced information
    const newLog = {
      ip,
      userAgent,
      os,
      device,
      timestamp,
      date,
      time,
      linkClicked: linkClicked || null,
      referrer: referrer || null,
      pageTitle: pageTitle || null,
      language: language || null,
      screenResolution: screenResolution || null,
      timezone: timezone || null,
      // Note: MAC address cannot be obtained from web browsers due to security restrictions
    }
    
    logs.push(newLog)
    await fs.writeFile(LOG_PATH, JSON.stringify(logs, null, 2))
    
    return NextResponse.json({ success: true, log: newLog })
  } catch (error) {
    console.error('Error logging visitor:', error)
    return NextResponse.json({ error: 'Failed to log visitor' }, { status: 500 })
  }
} 