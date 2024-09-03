function Tool({ name_tool, image, link }) {
  return (
    <a href={link} target="_blank">
      <div className="rounded-lg  bg-green-calid bg-opacity-60 flex place-content-center place-items-center py-2 px-4 gap-5 hover:bg-opacity-15">
        <img src={image} alt={name_tool} className="w-10 h-10" />
        <p className="font-montserrat text-lg font-bold">{name_tool}</p>
      </div>
    </a>
  )
}

export default Tool;