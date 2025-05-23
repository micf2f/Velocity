import { useSelector } from 'react-redux';

import Button from '../../../ui/Button/Button';

import noImage from '../../../../assets/images/noImage.png';


export default function ProfileInfo() {

    const { user } = useSelector(state => state.app);

    return (
        <div className='grid grid-cols-1 md:grid-cols-5 bg-[#cdb58f] text-center items-center justify-items-center p-4'>
            <img src={noImage} className='h-40 rounded-full border-3 border-orange-600 p-1' />

            {Object.entries(user).map(([key, value]) => (
                <div key={key}>
                    <p className="text-orange-600 font-bold text-s uppercase"> {key}: </p>
                    <p className="text-gray-900 font-semibold"> {value} </p>
                </div>
            ))}

            <Button style='bg-orange-600 rounded-full hover:bg-orange-500 w-30 p-2 mt-2 md:mt-0' title="Change" />

        </div>
    )

}
