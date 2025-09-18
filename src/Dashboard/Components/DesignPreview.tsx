import axios from "axios";
import { useEffect, useState } from "react";
import EditingInterface from "./EditingInterface";
import Shapes from "./Shapes";

const DesignPreview = ({ editingInterfaceType }) => {
    const [unSplashImage, setUnSplashImage] = useState([]);
    const [selectedImage, setSelectedImage] = useState("");
    const [selectedShape, setSelectedShape] = useState([])

    useEffect(() => {
        axios
            .get(
                `https://api.unsplash.com/photos/random?query=nature&count=15&client_id=z8swE7C9NZG8pW3yze5qXS3KgPrrqQ-ZmGfoltz7x-E`
            )
            .then((res) => {
                setUnSplashImage(res.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);

    const handleSelectImage = (imageLink) => {
        if (imageLink) {
            setSelectedImage(imageLink);
        }
    };

    const handleSelectShape = (shape) => {
        setSelectedShape((prev) => [
            ...prev,
            {
                ...shape,
                id: Date.now(),
            },
        ]);
        console.log(shape);
    };

    console.log(selectedShape);

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="border-r p-3 w-[15rem] overflow-auto">
                {
                    editingInterfaceType === 'images' ? (
                        <div>
                            <h2 className="mb-4 font-semibold">Photos from Unsplash</h2>
                            <div className="grid grid-cols-2 gap-2">
                                {unSplashImage.map((photo, i) => (
                                    <img
                                        key={i}
                                        src={photo.urls?.regular}
                                        alt={photo.alt_description || "Unsplash image"}
                                        className="w-full h-auto cursor-pointer hover:opacity-80"
                                        onClick={() => handleSelectImage(photo.urls?.regular)}
                                    />
                                ))}
                            </div>
                        </div>
                    ) : <Shapes handleSelectShape={handleSelectShape} />
                }
            </div>

            {/* Main Editor Area - Scrollable */}
            <div className="flex-1 flex flex-col p-4">
                {/* Editor Header (optional) */}
                <div className="mb-4">
                    <h2 className="text-xl font-semibold">Editor</h2>
                </div>

                {/* Scrollable Canvas Container */}
                <div
                    className="flex-1 w-[40rem]"
                    style={{ maxHeight: "calc(100vh - 120px)" }}
                >
                    <EditingInterface
                        selectedShape={selectedShape}
                    />

                </div>
            </div>
        </div>
    );
};

export default DesignPreview;