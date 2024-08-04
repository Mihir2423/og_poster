declare type ChildrenProps = {
    children: React.ReactNode;
}

declare type PostProps = ({
    id: number;
    title: string;
    image: string;
    description: string;
} | {
    id: number;
    title: string;
    description: string;
    image?: undefined;
})