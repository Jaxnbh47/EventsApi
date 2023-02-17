import React, { ReactNode, useState } from "react";

export interface BucketList {
    name?: string;
    url?: string;
    date?: string;
    id?: string;
}

export interface SearchCriteria {
    keyword?: any;
    latlong?: any;
    startDateTime?: any;
    endDateTime?: any; 
}


interface IBucketListProps {
    addToBucketList: (event: BucketList) => void;
    remove: (list?: BucketList[]) => void;
    bucketList: BucketList[];
    searchCriteria: SearchCriteria[];
}

const defaultValues: IBucketListProps = {
    addToBucketList: () => {},
    remove: () => {},
    bucketList: [],
    searchCriteria: [],
}

export const List = React.createContext<IBucketListProps>(defaultValues)


export default function ListProvider({children}: {children: ReactNode}) {
    const[bucketList, setBucketList] = useState<BucketList[]>([]);
    let[searchCriteria, setSearchCriteria] = useState<SearchCriteria[]>([])
    

    function addToBucketList(event: BucketList) {
       
            let newList = [...bucketList];
            newList.push(event);
            setBucketList(newList);
            console.log(bucketList);

    }

    function remove(list?: any): void {
    
        setBucketList(list)
    }

    return <List.Provider value={{addToBucketList, remove, bucketList, searchCriteria}}>{children}</List.Provider>

}