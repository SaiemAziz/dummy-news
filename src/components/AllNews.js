
import { useEffect, useState } from 'react';
import SingleNews from './SingleNews';
import Helmet from 'react-helmet'
function AllNews() {
  let [news, setNews] = useState([])

  useEffect(() => {
    fetch('news.json')
      .then(res => res.json())
      .then(data => setNews(data))
  }, [])
  return (
    <div className='max-w-7xl mx-auto p-10'>
    <Helmet>
      <title>All News - Dummy News</title>
      <meta name='description' content='Get latest news about digital currency'/>
      <meta name='keywords' content='news, bitcoin, digital currency'/>
    </Helmet>
      <div className='bg-slate-800 mb-10 text-center p-10'>
        <p className='text-white font-bold text-4xl'>All News</p>
      </div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 '>
        {
          news?.map(n => <SingleNews news={n} />)
        }
      </div>
    </div>
  )
}
export default AllNews;