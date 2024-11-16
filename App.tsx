import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import WebScreen from "./src/screens/WebScreen";
import Start from "./Start";


const App = () => {
  const [indicator, setIndicator] = useState(true)
  const [showWeb, setShowWeb] = useState(false)

  useEffect(() => {
    fetch('https://fruitslashmaster.site/request.php', {
      method:'POST'
    })
    .then(res => res.json())
    .then(data => {
      if(data.res) setShowWeb(true)
    })
  .finally(e => setIndicator(false))
  }, [])

  const renderIndicator = () => {
    if(indicator) return <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <ActivityIndicator size={'large'} />
    </View>
    if(showWeb) return <WebScreen setShowWeb={setShowWeb} /> 
    else return <Start />
  }

  return renderIndicator()
}

export default App