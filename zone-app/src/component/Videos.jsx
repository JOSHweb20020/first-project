import { Stack, Box } from "@mui/material"
import {VideoCard} from './'
const Videos = ({videos}) => {

    console.log(videos)
  return (
    <Stack direction='row' flexwrap="wrap"
    justifyContent='start' gap={2}>
      {videos.map ((item,idx) => (
        <Box key ={idk}>
          {item.id.vieoId && <VideoCard video={item}/>}
          {item.id.vieoId && <ChannelCard channelDetail={item}/>}

        </Box>
      ))}
    </Stack>
  )
}

export default Videos