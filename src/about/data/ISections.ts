export default interface IContent{
    lines: ILine[];
}
interface ILine{
    words: ILineWords[];
}
interface ILineWords{
    text: string;
    special?: boolean;
}