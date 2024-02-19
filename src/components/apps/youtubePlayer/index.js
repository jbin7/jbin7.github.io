import React, { useEffect,useState } from 'react';
import YouTube from 'react-youtube';

import "./index.scss"
import kineticImg from './kinetic.jpg'
import concussiveImg from './concussive.jpg'
import etherealImg from './ethereal.jpg'



const Index = ({ data, location }) => {

  const arr= [
    {
      id: 'AwlA2e_tFjc',
      name: 'DJ SONA',
      description: 'Kinetic',
      playerObj: '',
      coverImg: kineticImg,
      isPlaying: false
    },
    {
      id: 'goHHknZJaIY',
      name: 'DJ SONA',
      description: 'Concussive',
      playerObj: '',
      coverImg: concussiveImg,
      isPlaying: false
    },
    {
      id: 'GOgFsAejQ0o',
      name: 'DJ SONA',
      description: 'Ethereal',
      playerObj: '',
      coverImg: etherealImg,
      isPlaying: false
    }        
  ]
  
  const [playList, setPlayList] = useState(arr)  

  const updatePlayList = (itemId, newItem)=>{
    setPlayList((prevItems) => {
      return prevItems.map((item) => {
        // 해당 아이템의 id에 맞는 객체를 찾아서 업데이트
        if (item.id === itemId) {
          return { ...newItem }
        }
        return item
      });
    });    
  }


  const handleClick = (itemId, isPlaying)=> {    
    

    if(isPlaying) {
      setPlayList((prevItems) => {
        return prevItems.map((item) => {
          
          if (item.id === itemId) {
            item.playerObj.pauseVideo()
            return { ...item, isPlaying: false }
          }
          return item
        });
      });                      
      
    }else {
      setPlayList((prevItems) => {
        return prevItems.map((item) => {
          
          if (item.id === itemId) {
            item.playerObj.playVideo()
            return { ...item, isPlaying: true }
          }
          item.playerObj.pauseVideo()
          return { ...item, isPlaying: false }
        });
      });     
            
    }
  }


  const onReady = (event, item) => {    
    // 동영상이 준비되었을 때 실행할 코드
    let obj = {
      ...item,
      playerObj: event.target
    }
    updatePlayList(item.id, obj)
  };

  const onStateChange = (event, item) => {
    // 동영상의 상태가 변경될 때 실행할 코드
    if (event.data === 1) {
      // 동영상이 재생 중일 때
    } else if (event.data === 2) {
      // 동영상이 일시정지 중일 때
    }
  };

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      // 동영상에 대한 추가적인 매개변수
      controls: 0,
      rel:0,
      showinfo: 0,
    },
  };


  useEffect(() => {    
    
  }, [])   
  
  return (
    <div className='youtube-player-container'>
        {playList.map((item, index) => (
          // 배열의 각 요소에 대해 새로운 컴포넌트 생성          
          <article key={index} className={`player-wrapper ${item.isPlaying ? 'playing':''}`}>            
            <div className='player-cover' onClick={()=>{handleClick(item.id , item.isPlaying)}}>
              <div className='player-info'>
                <h3>{item.name}</h3>
                <h4>{item.description}</h4>
              </div>

            </div>
            <img className="cover-img" src={item.coverImg} alt="cover-img"></img>
            <YouTube className='app-player'
              videoId={item.id} // YouTube 동영상의 고유 ID
              opts={opts}
              onReady={(e)=>{
                onReady(e,item)
              }}
              onStateChange={(e)=>{
                onStateChange(e,item)
              }}
            />
          </article>          
        ))}     
    </div>
  )
}

export default Index
