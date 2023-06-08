import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import styled from "styled-components";
import { movies } from "../../movie_data";

function Home() {
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
                    {movies.results.map((movie) => (
                        <ul key={movie.id}>
                            <li>
                                {movie.title}
                            </li>
                        </ul>
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

export default Home;