const baseURL=
"http://api.weatherapi.com/v1/current.json?key=bd641752e9664b0f9df152304241906"

export const getWeatherForCity=async(city)=>{
       const response=await fetch(`${baseURL}&q=${city}&aqi=yes`)
       return response.json();
}