import {useState} from 'react'
import { X } from 'lucide-react'

export default function FormYouTube(props) {

    return(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-8 max-w-md w-full">

                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-gray-800">Sign Up to Watch</h2>
                            <button
                                type="button"
                                onClick={props.handleClose}
                                className="text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <form onSubmit={props.handleSubmit}>
                        <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name
                            </label>
                            <input
                            type="text"
                            name="name"
                            value={props.name}
                            onChange={props.handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                            required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address
                            </label>
                            <input
                            type="email"
                            name="email"
                            value={props.email}
                            onChange={props.handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                            required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                            Phone Number
                            </label>
                            <input
                            type="tel"
                            name="phone"
                            value={props.phone}
                            onChange={props.handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                            required
                            />
                        </div>

                        <div>
                            <h1 className='text-center text-red-600 font-semibold'>{props.error}</h1>
                        </div>

                        <div className="flex space-x-4 pt-4">
                            <button
                            type="submit"
                            className="flex-1 px-4 py-2 bg-orange-400 text-white rounded-md hover:bg-orange-700"
                            >
                            Sign Up & Watch
                            </button>
                        </div>
                        </div>
                        </form>

                    </div>
                    </div>
    )
}