const Contacts = () => {
    return ( 
        <div>
            <div className="flex justify-center gap-4 mt-10">
      <a
        href="#"
        className="relative flex items-center justify-center w-16 h-16 rounded-full transition-all hover:bg-[#242c34]"
      >
        <svg
          className="absolute w-[60%] h-full text-white hover:bounce-scale"
          viewBox="0 0 24 24"
        >
          <path d="M20 2H4C2.897 2 2 2.897 2 4V20C2 21.103 2.897 22 4 22H20C21.103 22 22 21.103 22 20V4C22 2.897 21.103 2 20 2Z" />
        </svg>
      </a>

      <a
        href="#"
        className="relative flex items-center justify-center w-16 h-16 rounded-full transition-all hover:bg-[#242c34]"
      >
        <svg
          className="absolute w-[60%] h-full text-white hover:bounce-scale"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" />
        </svg>
      </a>

      <a
        href="#"
        className="relative flex items-center justify-center w-16 h-16 rounded-full transition-all hover:bg-[#242c34]"
      >
        <svg
          className="absolute w-[60%] h-full text-white hover:bounce-scale"
          viewBox="0 0 24 24"
        >
          <path d="M3 12L21 12" />
        </svg>
      </a>
    </div>
        </div>
     );
}
 
export default Contacts;