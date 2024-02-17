import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import MovieDetails from '@/components/MovieDetails';
import PageHeader from '@/components/PageHeader';

export function getStaticProps() {
    return new Promise((resolve,reject)=>{
      fetch('https://shiny-gray-pea-coat.cyclic.app/api/movies/573a13baf29313caabd506e4').then(res=>res.json()).then(data=>{
        resolve({ props: { movie: data } })
      })
    })
  }
  

export default function About(props) {
    return (
      <>
      <PageHeader text="About the Software Developer: Ali Keshavarzi" />
      <Card className="bg-light">
        <Card.Body>
          <p>
            My name is Ali. I want to be a Software Developer. I enjoy playing games like league of legends and apex on PC.
          </p>
          <p>
            I also love playing soccer. And my job is at customer service for a company called enerhold.
          </p>
          <p>
            The movies that I love are
            {' '}
            <Link href={`/movies/${props.movie.title}`} legacyBehavior>
              <a>{props.movie.title}</a>
            </Link>
          </p>
        </Card.Body>
      </Card>
      <br />
      <MovieDetails movie={props.movie} />
      </>
    );
  }