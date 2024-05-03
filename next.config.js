// 이미지 모듈의 구성 설정에 사용
/* 특정 도메인에서 호스팅되는 이미지를 사용할 때 해당 도메인을
domains 배열에 추가하여 next.js에서 이미지 최적하 및 처리 */
/** @type {import('next').NextConfig} */
const nextConfig = {
    
  images: {
    domains: ['cdn.weatherapi.com'], // Add any other domains you might use as well
  },
}

module.exports = nextConfig
