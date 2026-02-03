import { NextResponse } from 'next/server';

interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    company?: string;
    service: string;
    projectType: string;
    message: string;
    language: 'id' | 'en';
}

export async function POST(request: Request) {
    try {
        const body: ContactFormData = await request.json();
        const { name, email, phone, company, service, projectType, message, language } = body;

        // Validate required fields
        if (!name || !email || !phone || !service || !projectType || !message) {
            return NextResponse.json(
                { error: language === 'id' ? 'Mohon lengkapi semua field yang wajib diisi' : 'Please fill in all required fields' },
                { status: 400 }
            );
        }

        // Check if Web3Forms access key is configured
        const WEB3FORMS_ACCESS_KEY ='260132ff-686e-41a2-8e29-8868d3ffb6a9';
        
        if (!WEB3FORMS_ACCESS_KEY) {
            // If no access key, log the submission and return success
            // This allows testing without a configured email service
            console.log('=== Contact Form Submission (No Email Service) ===');
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Phone:', phone);
            console.log('Company:', company || '-');
            console.log('Service:', service);
            console.log('Project Type:', projectType);
            console.log('Message:', message);
            console.log('================================================');
            
            return NextResponse.json({
                success: true,
                message: language === 'id' ? 'Pesan berhasil dikirim!' : 'Message sent successfully!',
            });
        }

        const formData = {
            access_key: WEB3FORMS_ACCESS_KEY,
            subject: `[Twenti Studio] New Inquiry: ${service} - ${name}`,
            from_name: 'Twenti Studio Website',
            // Add the registered page URL for Web3Forms verification
            redirect: 'https://twenti.studio/kontak',
            name: name,
            email: email,
            phone: phone,
            company: company || '-',
            service: service,
            project_type: projectType,
            message: message,
            botcheck: '',
        };

        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (result.success) {
            return NextResponse.json({
                success: true,
                message: language === 'id' ? 'Pesan berhasil dikirim!' : 'Message sent successfully!',
            });
        } else {
            console.error('Web3Forms error:', result);
            throw new Error(result.message || 'Failed to send message');
        }

    } catch (error) {
        console.error('Error sending message:', error);
        return NextResponse.json(
            { 
                error: 'Failed to send message',
                details: error instanceof Error ? error.message : 'Unknown error'
            },
            { status: 500 }
        );
    }
}
