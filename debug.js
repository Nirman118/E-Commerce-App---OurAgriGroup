import Reactotron, { asyncStorage, networking, openInEditor, storybook, trackGlobalErrors } from 'reactotron-react-native'

console.log = (...args) => {
  Reactotron.display({
    name: 'CONSOLE.LOG',
    important: true,
    value: args,
    preview: args.length ? JSON.stringify(args) : args[0]
  })
}

Reactotron
  //.configure({host: '192.168.1.147'}) // cedric office
// .configure({ host: '192.168.1.2' }) // cedric home
  // .configure({host:"192.168.1.174"}) //cedric office
  //  .configure({host: '192.168.43.208'}) // jeni home
  // .configure({ host: '192.168.1.180' }) // jeni home
   .configure({ host: '192.168.0.8' }) // jeni office
  .useReactNative()
  .use(asyncStorage())
  .use(networking())
  .use(openInEditor())
  .use(storybook())
  .use(trackGlobalErrors())
  .connect()

Reactotron.clear()
