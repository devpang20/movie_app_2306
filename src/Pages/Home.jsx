import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import styled from "styled-components";
import { movies } from "../../movie_data";
import { useEffect, useState } from "react";
import { config } from "../constant";
import PosterItem from "../Components/PosterItem";

function Home() {
    const [popularMovies, setPopularMovies] = useState([])


    useEffect(() => {
       fetch("https://api.themoviedb.org/3/movie/popular?language=ko-KR&api_key=" + 
        config.API_KEY
       )
       .then((res) => res.json())
       .then((data) => {
        console.log(data)
        setPopularMovies(data.results)
       })
        
    }, [])



    return ( 
        <Container>
            <MoviePoster>
                <Carousel 
                    showThumbs
                    autoPlay
                    infiniteLoop
                    showStatus={false}
                    transitionTime={3}
                >
                    {popularMovies.map((movie) => (
                        <PosterItem key={movie.id} movie={movie} />
                    ))}
                </Carousel>
            </MoviePoster>
        </Container>
    );
}

const Container = styled.div``;
const MoviePoster = styled.div`
    display: flex;
    align-items: center;
`;

const ImgBox = styled.div`
    height: calc(100vh - 80px);
    img {
        display: block;
    }
`

export default Home;