'use client';

import { keepPreviousData, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { format } from "date-fns";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

function JuzEntryTable({setStats}) {
  const searchParams = useSearchParams();
  const page = searchParams.get('page')
  const juz = searchParams.get('juz')
  async function getJuz() {
    const jwt = localStorage.getItem("jwt");
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_URL}/getEntry/juz/${juz}?page=${page}`,
        { headers: { Authorization: `Bearer ${jwt}` } },
      );
      if (res.data.ok) {
        // console.log(res.data)
        const {avgMarks,timesRecited,timesPassed,timesFailed} = res.data.stats[0];
        setStats({avgMarks,timesFailed,timesPassed,timesRecited})
        console.log(res.data)
        return res.data;
      }
    } catch (err) {
      console.log(err);
      return {};
    }
  }
  const { data: murajaah, isFetching } = useQuery({
    queryKey: ["juz",page,juz],
    queryFn: getJuz,
    placeholderData:keepPreviousData
  });
    return (
      <div className="w-full bg-(--layer) grid grid-rows-12 gap-y-1 row shadow-sm border border-(--highlightBorder) mt-5 ">
        <div className="grid grid-cols-7 px-3 py-2 bg-(--highlight) shadow-sm mb-1">
          <p className="">no</p>
          <p className="col-span-2">date</p>
          <p className="text-center">juz</p>
          <p className="text-center">tam</p>
          <p className="text-center">talq</p>
          <p className="text-center">marks</p>
        </div>
        {murajaah?.juz?.map((el,i) => <JuzEntryRow key={el._id} page={page} index={i + 1} date={el.date} juz={el.juz} tambeeh={el.tambeeh} talqeen={el.talqeen} marks={el.marks}/>)}
        <TableController totalPages={Math.ceil(murajaah?.totalRes / 10)}/>
      </div>
    );
}

export default JuzEntryTable


function JuzEntryRow({page,index,date,juz,tambeeh,talqeen,marks}){
  return (
    <div className="grid grid-cols-7 px-3 py-2 border-b border-(--border)">
      <p className="">{page * index}</p>
      <p className="col-span-2 text-xs tracking-wider">{format(date,'MMM d, yyy')}</p>
      <p className="text-center">{juz}</p>
      <p className="text-center">{tambeeh}</p>
      <p className="text-center">{talqeen}</p>
      <p className="text-center">{marks}</p>
    </div>
  );
}

function TableController({totalPages}){
  const [page,setPage] = useState(1);
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const pageParam = params.get("page");
  function nextPage(){
    if(totalPages == page) return;
    const searchParams = new URLSearchParams(params);
    searchParams.set('page',page + 1);
    router.replace(`${pathname}?${searchParams}`,{scroll:false});
    setPage(page + 1);
  }
  function previousPage(){
    if(page === 1) return;
    const searchParams = new URLSearchParams(params);
    searchParams.set('page',page - 1);
    router.replace(`${pathname}?${searchParams}`,{scroll:false});
    setPage(page - 1);
  }

  useEffect(() => {
    const searchParams = new URLSearchParams(params);
    searchParams.set("page", 1);
    searchParams.set("juz", 1);
    router.replace(`${pathname}?${searchParams}`, { scroll: false });
  },[]);

  useEffect(() => {
    if (pageParam && Number(pageParam) !== page) {
      setPage(Number(pageParam));
    }
  }, [pageParam, page]);
  return (
    <div className="h-full row-start-12 flex justify-between items-center gap-x-3 pl-3 pr-1 bg-(--highlight) shadow-sm">
      <p>{page} out of {totalPages}</p>
      <div className="space-x-1">
        <button onClick={previousPage} className="w-23 bg-amber-800 text-white px-3 py-[0.4rem] rounded-md shadow-sm ">
          previous
        </button>
        <button onClick={nextPage} className="w-23 bg-amber-800 text-white px-3 py-[0.4rem] rounded-md shadow-sm ">
          next
        </button>
      </div>
    </div>
  );
}