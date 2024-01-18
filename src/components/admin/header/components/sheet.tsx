import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { RiMenu4Fill } from "react-icons/ri";
import { Skeleton } from "@/components/ui/skeleton";
import { Progress } from "@/components/ui/progress";

interface Props {
  loading: boolean;
  data: any;
}

export const ComponentSheet = ({ loading, data }: Props) => {
  return (
    <Sheet>
      <SheetTrigger>
        <Button>
          <RiMenu4Fill />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription>
            <div className="flex flex-col items-start space-y-2">
              <div className="">
                {loading ? (
                  <>
                    <Skeleton className="w-[78px] h-[40px] rounded-[7px]" />
                    <Skeleton className="w-[132px] h-[35px] rounded-full" />
                  </>
                ) : (
                  <>
                    {data && (
                      <>
                        <Button>Level {data.user.level}</Button>
                        <div className="flex items-center py-2 px-3 bg-secondary rounded-full gap-2">
                          <Progress
                            value={data.user.progress}
                            className="w-[70px] h-2 bg-black"
                          />
                          <p className="text-sm">{data.user.progress} %</p>
                        </div>
                      </>
                    )}
                  </>
                )}
              </div>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
