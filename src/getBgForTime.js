import mountainsDay from './assets/mountains-blue.svg'
import mountainsDusk from './assets/mountains-dusk.svg'
import mountainsDaybreak from './assets/mountains-daybreak.svg'
import mountainsNight from './assets/mountains-night.svg'
import mountainsBW from './assets/mountains-bw.svg'

const suncalc = require('suncalc');


getBgForTime() {
  let vm = this
  navigator.geolocation.getCurrentPosition(locationCallback, errorCallback)

  function locationCallback(position) {
    var times = suncalc.getTimes(new Date(), position.coords.latitude, position.coords.longitude);

    let sunrise = times.sunrise.getHours()
    let sunset = times.sunset.getHours()
    vm.setState({
      bg: getBg(sunrise, sunset)
    })
  }

  function errorCallback(error) {
    // default behavior
    vm.setState({
      bg: getBg(6, 20)
    })
  }

  function getBg(sunrise, sunset) {

    let hour = new Date().getHours()
    if (hour >= 0 && hour < sunrise-1) {
      return mountainsNight
    } else if (hour >= sunrise-1 && hour <= sunrise+1) {
      return mountainsDaybreak
    } else if (hour > sunrise+1 && hour < sunset-1) {
      return mountainsDay
    } else if (hour >= sunset-1 && hour <= sunset+1) {
      return mountainsDusk
    } else if (hour > sunset+1 && hour <= 24) {
      return mountainsNight
    } else {
      return mountainsDay
    }
  }
}

module.exports = {
  getBgForTime
}
