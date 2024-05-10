import PokeBool from '../../assets/images/pokabool.png'

const Logo = () => {
  return (
    <div className="hidden md:flex flex-1">
      <div className='flex items-center justify-center'>
        <span className='m-3'>Pokemon</span>
        <div className=' rotating w-10 bg-slate-500 rounded-full '>
          <img src={PokeBool.src} />
        </div>
      </div>
    </div>
  )
}

export default Logo