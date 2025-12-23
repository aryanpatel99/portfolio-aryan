import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
} from "@/components/kibo-ui/contribution-graph";
import { Badge } from "@/components/ui/badge";
import { useGithubContributions } from "@/hooks/useGithubContributions";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const ContributionGraphComponent = () => {
  const { data, loading } = useGithubContributions("aryanpatel99");

  if (loading) {
    return (
      <div className="text-sm text-muted-foreground">
        Loading GitHub activity…
      </div>
    );
  }

  if (!data.length) {
    return <p className="text-sm text-muted-foreground">No activity found.</p>;
  }

  return (
    <ContributionGraph data={data}>
      <ContributionGraphCalendar>
        {({ activity, dayIndex, weekIndex }) => (
          <Tooltip>
            <TooltipTrigger asChild>
              <g>
                <ContributionGraphBlock
                  activity={activity}
                  dayIndex={dayIndex}
                  weekIndex={weekIndex}
                  className="cursor-pointer"
                />
              </g>
            </TooltipTrigger>
            <TooltipContent>
              <p className="font-semibold">{activity.date}</p>
              <p>{activity.count} contributions</p>
            </TooltipContent>
          </Tooltip>
        )}
      </ContributionGraphCalendar>

      <ContributionGraphFooter>
        <ContributionGraphTotalCount />
        <ContributionGraphLegend />
      </ContributionGraphFooter>
    </ContributionGraph>
  );
};

export default ContributionGraphComponent;

// const ContributionGraphComponent = () => {
//   const { data, total, loading } = useGithubContributions("aryanpatel99",2025);
//   if (loading) {
//     return (
//       <div className="flex items-center justify-center text-sm text-muted-foreground">
//         Loading GitHub activity…
//       </div>
//     );
//   }

//   if (!data.length) {
//     return <p className="text-sm text-muted-foreground">No activity found.</p>;
//   }

//   return (
//     <ContributionGraph data={data} totalCount={total}>
//       <ContributionGraphCalendar>
//         {({ activity, dayIndex, weekIndex }) => (
//             <Tooltip>
//             <TooltipTrigger asChild>
//               <g>
//                 <ContributionGraphBlock
//                   activity={activity}
//                   className="cursor-pointer"
//                   dayIndex={dayIndex}
//                   weekIndex={weekIndex}
//                 />
//               </g>
//             </TooltipTrigger>
//             <TooltipContent>
//               <p className="font-semibold">{activity.date}</p>
//               <p>{activity.count} contributions</p>
//             </TooltipContent>
//           </Tooltip>
//         //   <ContributionGraphBlock
//         //     activity={activity}
//         //     dayIndex={dayIndex}
//         //     weekIndex={weekIndex}
//         //   />
//         )}
//       </ContributionGraphCalendar>
//       <ContributionGraphFooter>
//         <ContributionGraphTotalCount>
//           {({ totalCount, year }) => (
//             <div className="flex items-center gap-2">
//               <span className="text-muted-foreground text-sm">
//                 Year {year}:
//               </span>
//               <Badge variant="secondary">
//                 {totalCount.toLocaleString()} contributions
//               </Badge>
//             </div>
//           )}
//         </ContributionGraphTotalCount>
//         <ContributionGraphLegend>
//           {({ level }) => (
//             <div
//               className="group relative flex h-3 w-3 items-center justify-center"
//               data-level={level}
//             >
//               <div
//                 className={`h-full w-full rounded-sm border border-border ${
//                   level === 0 ? "bg-muted" : ""
//                 } ${level === 1 ? "bg-emerald-200 dark:bg-emerald-900" : ""} ${
//                   level === 2 ? "bg-emerald-400 dark:bg-emerald-700" : ""
//                 } ${level === 3 ? "bg-emerald-600 dark:bg-emerald-500" : ""} ${
//                   level === 4 ? "bg-emerald-800 dark:bg-emerald-300" : ""
//                 } `}
//               />
//               <span className="-top-8 absolute hidden rounded bg-popover px-2 py-1 text-popover-foreground text-xs shadow-md group-hover:block">
//                 Level {level}
//               </span>
//             </div>
//           )}
//         </ContributionGraphLegend>
//       </ContributionGraphFooter>
//     </ContributionGraph>
//   );
// };

