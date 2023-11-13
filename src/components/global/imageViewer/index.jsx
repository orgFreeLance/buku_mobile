import {
    Image,
} from "native-base";

export default function ImageViewer({ selectedImage }) {
    return (
        <Image
            source={selectedImage}
            size={200}
            style={{
                width: 200,
            }}
            alt="image background"
        />
    );
}

