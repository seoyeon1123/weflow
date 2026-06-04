import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabaseServer';

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const body = await req.json();
    const { name, phone, type, industry, message, agree } = body as {
      name: string;
      phone: string;
      type: string;
      industry: string;
      message: string;
      agree: boolean;
    };
    if (!name || !phone || !agree) {
      return NextResponse.json({ error: '필수 항목을 확인해 주세요.' }, { status: 400 });
    }
    const supabase = await createClient();
    const { error } = await supabase.from('inquiries').insert({
      name, phone, type, industry, message, agree, status: '신규',
    });
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: '요청 처리 중 오류가 발생했습니다.' }, { status: 500 });
  }
}
