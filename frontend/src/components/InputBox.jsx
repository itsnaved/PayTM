export function InputBox({label, placeholder, onChange}){
    return <div className="flex flex-col m-4 ">
        <div className="font-semibold">
        {label}
        </div>
        
        <input placeholder={placeholder} onChange={onChange}  className="border-slate-200 border rounded px-2 py-1 w-full outline-none"/>
        
    </div>
}