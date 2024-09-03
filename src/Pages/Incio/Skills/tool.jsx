function Tool({ tool, smalltool=false }) {
  return (
    <a href={tool.link} target="_blank">
      <div className="rounded-lg  bg-green-calid bg-opacity-60 flex place-content-center place-items-center py-2 px-4 gap-5 hover:bg-opacity-15">
        <img src={tool.image} alt={tool.name_tool} className={smalltool ? "w-5 h-5":"w-10 h-10" } />
        <p className={`font-montserrat font-bold ${smalltool ? "text-sm":"text-lg"}`}>{tool.name_tool}</p>
      </div>
    </a>
  )
}

export default Tool;