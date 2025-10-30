const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

// .get: 메소드(get:주소창에 파라미터 전달 /post: body에 파라미터 전달)
// '/' : 라우팅
// () => : 콜백함수를 익명함수로 처리 
// 요청이 왔을때 처리할 로직을 넣어줌

// 배포: cloudtype.io
// git-hub: https://github.com/cosemffj/node-express
// node -v: v22.20.0

// pm2: npm install pm2 -g
// 소스코드변경이 있을때 서버를 자동으로 재 실행해줌
// pm2 start index.js --watch  <-- 자동 재질행 옵션으로 start
// pm2 kill     <- 모든프로세스 종료
// pm2 status   <- 프로세스 상태 확인

app.get('/', (req, res) => {
    res.send('Hello world')
});

app.get('/dog', (req, res) => {
    res.send('Hello world dog') 
});

app.get('/cat3', (req, res) => {
    res.send('Hello world cat5')
    console.log('cat3')
}); 

// get 방식 파라미터 전달
// http://localhost:3000/cat2/:x?y=3&z=4
// params ==>   :로 정의된 자리에 들어오는 값 :x
// query  ==>   ?로 정의된 자리에 들어오는 값 ?y  &z

 
app.get('/cat2/:id', (req, res) => {    
// params: http://localhost:3000/cat/xxx
// [Object: null prototype] { id: 'xxx' }    
    const p = req.params
    const {id} = req.params
    console.log(id)
    
    const q = req.query    
    console.log(q.y)

    res.send('hello get')
});

 
// app.get('/', function(req, res){
//     res.send('Hello world')
// })

// request 요청 처리를 위한 리스너 등록
//  () => : 익명함수
app.listen(port, () => {
    console.log('port:' + port)
});

// 배포
// git commit -am "커밋 메시지" 
// git push origin main