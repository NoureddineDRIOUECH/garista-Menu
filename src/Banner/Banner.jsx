import React from 'react';
import { FaFacebook, FaInstagram, FaSnapchat, FaTiktok,FaYoutube, } from "react-icons/fa";
import { Link } from "react-router-dom";
import { APIURL } from '../lib/ApiKey';

function Banner({ items, infoRes, customization }) {
    const blue = "#28509E";

    console.log("The Items => ", items);

    return (
        <div className='p-4'>
            <div className="relative mx-auto h-[170px] max-w-md overflow-hidden rounded-[.5rem] bg-white shadow">
                <div className='overflow-hidden bg-[#999]'>
                    <img src={`${APIURL}/storage/${infoRes.cover_image}`} loading='lazy' className="w-full object-cover max-h-44 bg-[#999] h-screen" alt={items.name} />
                </div>
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black"></div>
                <div className="absolute inset-x-0 bottom-16 z-20 p-4 text-center">
                    <h3 className="text-xl font-medium text-white">{items.name}</h3>
                </div>
                <div className='flex justify-between absolute inset-x-0 bottom-0 z-20 p-4 text-center'>
                    <div className='flex gap-2'>
                        {infoRes.facebook && (
                            <Link to={infoRes.facebook} target='_blank'>
                                <FaFacebook color={customization?.selectedIconColor} />
                            </Link>
                        )}
                        {infoRes.instgram && (
                            <Link to={infoRes.instgram} target='_blank'>
                                <FaInstagram color={customization?.selectedIconColor} />
                            </Link>
                        )}
                        {infoRes.snapshat && (
                            <Link to={infoRes.snapshat} target='_blank'>
                                <FaSnapchat color={customization?.selectedIconColor} />
                            </Link>
                        )}
                        {infoRes.youtube && (
                            <Link to={infoRes.youtube} target='_blank'>
                                <FaYoutube color={customization?.selectedIconColor} />
                            </Link>
                        )}
                        {infoRes.tiktok && (
                            <Link to={infoRes.tiktok} target='_blank'>
                                <FaTiktok color={customization?.selectedIconColor} />
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;

