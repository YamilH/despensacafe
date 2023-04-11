
import homevideo from '/media/cafelindo.mp4'

export function Home() {
  return (
    <>
  <h1 className='h1'>Despensa San Juan</h1>

  <video src={homevideo} autoPlay loop muted className="object-fit-cover w-100 bg-video"
   />
      <div className="container position-absolute">
        <h1 className="text-light">Depensa San Juan</h1>
        <p className="text-light">Welcome to my website</p>
      </div>
  </>
  )
}