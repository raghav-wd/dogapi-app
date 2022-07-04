import Select from "react-select";
import { useState, useEffect } from "react";

const DogBreeds = () => {
    let breedNames = []
    const [options, setOptions] = useState()
    const [selectedBreed, seSselectedBreed] = useState('https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg')
    const url = "https://api.thecatapi.com/v1/breeds";
    useEffect(() => {
        fetch(url, {
            // body: {
            //     api_key:'a75dc5be-ed7a-4ea0-9c74-10ed2648c2bf'
            // }
        }).then(resp => resp.json())
        .then(data => {
            data.forEach(element => {
                const {name, image} = element
                breedNames.push({name, label: name, url: image.url})
                setOptions(breedNames)
            })
        })
    
    }, [])
    const changeHandler = (e) => {
        seSselectedBreed(e)
    }

    return (
    <>
    <Select
          options={options}
          onChange={changeHandler}
        />
        <br/>
        <img margin='12px' height='500px' src={selectedBreed.url}/>
    </>
    )
}

export default DogBreeds