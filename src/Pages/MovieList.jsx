import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { config } from "../constant";
import Card from "../Components/Card";
import SearchBox from "../Components/SearchBox";

function MovieList() {
    // 상세페이지 관련 
    const [movies, setMovies] = useState([])
    const params = useParams();

    // 검색 관련
    const [keyword, setKeyword] = useState("")
    const onChangeKeyword = (e) => {
        setKeyword(e.target.value)
    }

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${params.type ? params.type : "popular" }?language=ko-KR&api_key=` + config.API_KEY
        )
            .then((res) => res.json())
            .then((data) => {
            // console.log(data)
            setMovies(data.results)
            setKeyword("")
        })
     }, [params.type])


    return ( 
        <Container>
            <SearchBox keyword={keyword} onChangeKeyword={onChangeKeyword} />
            <Title></Title>
            <Group>
                {movies
                    .filter(
                        (movie) => 
                            movie.original_title.toLowerCase().includes(keyword.toLowerCase()) ||
                        movie.title.toLowerCase().includes(keyword.toLowerCase())
                    )
                    .map((movie) => (
                        <Card key={movie.id} movie={movie}></Card>
                ))}
            </Group>
        </Container>
    );
}

const Container = styled.div`
    padding: 0 3rem 3rem 3rem;
`

const Title = styled.h2`
    font-zise: 1.75rem;
    margin: 2.5rem;
`

const Group = styled.div`
    display: flex;
    flex-flow: row wrap;
    width: 100%
    justify-content: center;
`

export default MovieList;