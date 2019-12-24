# React useInfiniteScroll
 
## Description  
  
**React hook that abstracts subscription on window events, and provides you simple API to execute some command when a user reaches the bottom of the screen**
  
  
## Installation  
  
```bash  
npm install react-use-infinite-scroll 
```  

## About

The library exposes simple API, you just register a callback that you want to fire every time the user reaches the end of the screen, that callback is then attached as a listener to window event 'scroll'. You don't have to worry about cleaning up  after yourself that is all done under the hood when the component that consumes this hook unmounts

```tsx
useInfiniteScroll: (callback: () => void) => void
```

## Usage  
```tsx 
import React, { useEffect } from 'react';  
import { useInfiniteScroll } from 'react-use-infinite-scroll'; 

import { useSocialItemsContext } from './context/social-items';  
import { SocialEntity } from './shared/models';  
import { BaseLayout, Card } from './components';  
 
  
const App: React.FC = (): JSX.Element => {  
  const {  
  state: { items, currentPage },  
  setCurrentPage,  
  } = useSocialItemsContext();  
  
  const loadMore = () => setCurrentPage(currentPage + 1);  
  
  useEffect(() => {
    useInfiniteScroll(loadMore);  
  }, [])

  return (  
   <BaseLayout>  
     {items.map((item: SocialEntity): JSX.Element => (
       <Card item={item} key={item.title} />  
     ))}  
   </BaseLayout>  
 );  
};  
  
export default App;
```
  
## Authors

[Radovan Stevanovic](https://github.com/rasha08)

[Aleksandar Ilic](https://github.com/cili93)
 
## License  
  
MIT © [rasha08](https://github.com/rasha08)
