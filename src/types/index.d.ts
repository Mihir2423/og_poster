declare type ChildrenProps = {
    children: React.ReactNode;
}

declare type PostProps = ({
    _id: string;
    title: string;
    image: string;
    description: string;
} | {
    _id: string;
    title: string;
    description: string;
    image?: undefined;
})

declare type ParamsProps = {
    params: {
        id: string;
    };
}