import widgets from '../../../../constants/widgets';


export default function Widget() {

    return (<>

        {widgets.map(({ id, title, img }) =>

            <div key={id} className="m-4 p-4 rounded-xl bg-zinc-700">
                <p className='text-orange-600 font-semibold text-xl'> {title} </p>
                <div className='flex items-center justify-center'>
                    <img src={img} className='h-60' />
                </div>
            </div>

        )}

   </>)

}
