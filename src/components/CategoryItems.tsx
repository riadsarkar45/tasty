import YouTube from "react-youtube";

const CategoryItems = () => {
    return (
        <div>
            <div className="bg-white p-3 mt-5 rounded-md mb-4">
                <div className="border-b p-3 text-2xl">
                    <h2>Breakfast</h2>
                </div>
                <div className="grid grid-cols-4 gap-2">
                    <div>
                        <YouTube
                            videoId="pd0ng0ofyio"
                            opts={{
                                width: "282.5",
                                height: "250",
                            }}
                        />
                    </div>
                    <div>
                        <YouTube
                            videoId="pd0ng0ofyio"
                            opts={{
                                width: "282.5",
                                height: "250",
                            }}
                        />
                    </div>
                    <div>
                        <YouTube
                            videoId="pd0ng0ofyio"
                            opts={{
                                width: "282.5",
                                height: "250",
                            }}
                        />
                    </div>
                    <div>
                        <YouTube
                            videoId="pd0ng0ofyio"
                            opts={{
                                width: "282.5",
                                height: "250",
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="bg-white p-3 mt-5 rounded-md mb-4">
                <div className="border-b p-3 text-2xl">
                    <h2>Lunch </h2>
                </div>
                <div className="grid grid-cols-4 gap-2">
                    <div>
                        <YouTube
                            videoId="pd0ng0ofyio"
                            opts={{
                                width: "282.5",
                                height: "250",
                            }}
                        />
                    </div>
                    <div>
                        <YouTube
                            videoId="pd0ng0ofyio"
                            opts={{
                                width: "282.5",
                                height: "250",
                            }}
                        />
                    </div>
                    <div>
                        <YouTube
                            videoId="pd0ng0ofyio"
                            opts={{
                                width: "282.5",
                                height: "250",
                            }}
                        />
                    </div>
                    <div>
                        <YouTube
                            videoId="pd0ng0ofyio"
                            opts={{
                                width: "282.5",
                                height: "250",
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryItems;