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
- extract rotateplayer as a gamehelper and test it
- rotate debuggin
- rotation forced in position
- rotation blocked when no
- drop player
- gameover limits set
- next block queue
