import React from 'react'

import { useInfiniteScroll } from 'react-use-infinite-scroll'

const App = () => {
    const loadMore = () => console.log('LOAD MORE');

    useInfiniteScroll(loadMore);

    return (
      <div>
        <h1>This component is now using infinite scroll</h1>
      </div>
    )
};

export default App
