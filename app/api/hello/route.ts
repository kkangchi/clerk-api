import { NextResponse } from 'next/server'

export async function GET() {
  const data = {
    message: 'Hello next.js!',
    contents:
      '/app/api 폴더 생성 Next.js에서 백엔드 서비스 제공 가능 관습적으로 폴더명을 api로 씀 백엔드 api의 파일명은 route.js로 정해진 파일명을 사용',
  }
  return NextResponse.json(data)
}
