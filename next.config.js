/** @type {import('next').NextConfig} */

// nextConfig é um objeto que define as configurações do Next.js. A propriedade image define as configurações de imagens e caso necessário a configuração de imagens remotas. O remotePatterns é a propriedade que define as configurações de imagens remotas dos nossos providers como GitHub, Google, Facebook e etc.

// remotePatters contém algumas propriedades que definem o protocolo e o hostname para os nossos providers.

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
                port: '',
                pathname: '/u/**'
            }
        ]
    }
}

module.exports = nextConfig
