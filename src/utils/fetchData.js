export const exerciseOptions= {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key':'7fab64fed5mshc57e04fee268252p145258jsnc8ca102747b4',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
  },
};


export const fetchData = async (url,option) =>{
    const response = await fetch(url, option);
    const data = await response.json();

    return data;
}