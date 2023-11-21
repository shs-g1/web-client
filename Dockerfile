# 기본 이미지 설정
FROM node:lts

# 작업 디렉토리 설정 설정하기
WORKDIR /app

# package.json을 워킹 디렉토리에 복사
COPY package.json .

# 명령어 실행 (의존성 설치)
RUN npm install

# 현재 디렉토리의 모든 파일을 도커 컨테이너의 워킹 디렉토리에 복사한다.
COPY . .

# 3000번 포트 노출
EXPOSE 3000

# 리액트에서 사용할 환경변수 설정
#ENV REACT_APP_SERVER_PORT "https://"

# npm start 스크립트 실행
CMD ["npm", "start"]
