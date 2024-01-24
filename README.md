This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), which mocks the functions of a tetris game using typescript and react.

This project was to help explore CSS and typescript.

## Local

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Resources

https://alexbostock.medium.com/lessons-about-react-keyboard-input-forms-event-listeners-and-debugging-e79016c20ef1

https://blog.hubspot.com/website/center-div-css

https://makeschool.org/mediabook/oa/tutorials/react-redux-tetris-app-tutorial-o4s/tetris-introduction/

https://www.youtube.com/watch?v=ZGOaCxX8HIU

## Porject To Dos:

- Change variables names of movement
- relook at checkCollision situations
- edit the updateplayerobj/updateplayer to take hascollided as an optional argument? parameter
- gameover limits set
- next block queue
- check the movement, updatePlayerpos, updateplayer, fucntions hascollided may be able to be omitted
- make the viewport more dynamic
- make press and hold features

Single 100 × level
Double 300 × level
Triple 500 × level
Tetris 800 × level; difficult
Mini T-Spin no line(s) 100 × level
T-Spin no line(s) 400 × level
Mini T-Spin Single 200 × level; difficult
T-Spin Single 800 × level; difficult
Mini T-Spin Double (if present) 400 × level; difficult
T-Spin Double 1200 × level; difficult
T-Spin Triple 1600 × level; difficult
Back-to-Back difficult line clears Action score × 1.5 (excluding soft drop and hard drop)
Combo 50 × combo count × level
Soft drop 1 per cell
Hard drop 2 per cell

10 lines cleared level +1
