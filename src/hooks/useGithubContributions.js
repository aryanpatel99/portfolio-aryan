// import { useEffect, useState } from "react";

// // export function useGithubContributions(username) {
// //   const [data, setData] = useState([]);
// //   const [total, setTotal] = useState(0);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     async function fetchData() {
// //       try {
// //         const response = await fetch(
// //           `https://github-contributions-api.jogruber.de/v4/${username}`
// //         );
// //         if (!response.ok) {
// //           throw new Error("Failed to fetch data");
// //         }
// //         const data = await response.json();
// //         const year = 2025;
// //         const contributions = data.contributions.filter((d) =>
// //           d.date.startsWith(`${year}`)
// //         );

// //         const formatted = contributions.map((d) => ({
// //           date: d.date,
// //           count: d.count,
// //           level: calculateLevel(d.count, maxCount),
// //         }));

// //         setData(formatted);
// //         const calculatedTotal = formatted.reduce(
// //           (sum, item) => sum + item.count,
// //           0
// //         );
// //         setTotal(calculatedTotal);
// //       } catch (error) {
// //         console.error("Failed to fetch GitHub contributions", error);
// //       } finally {
// //         setLoading(false);
// //       }
// //     }
// //     fetchData();
// //   }, [username]);

// //   return { data, total, loading };
// // }

// function calculateLevel(count, max) {
//   if (count === 0) return 0;
//   return Math.min(4, Math.ceil((count / max) * 4));
// }

// export function useGithubContributions(
//   username,
//   year = new Date().getFullYear()
// ) {
//   const [data, setData] = useState([]);
//   const [total, setTotal] = useState(0);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const res = await fetch(
//           `https://github-contributions-api.jogruber.de/v4/${username}`
//         );
//         const json = await res.json();

//         const yearContributions = json.contributions.filter((d) =>
//           d.date.startsWith(String(year))
//         );

//         const formatted = yearContributions.map((d) => ({
//           date: d.date,
//           count: d.count,
//           level: d.level,
//         }));

//         setData(formatted);
//         const calculatedTotal = formatted.reduce(
//           (sum, item) => sum + item.count,
//           0
//         );
//         setTotal(calculatedTotal);
//       } catch (error) {
//         console.error("Failed to fetch GitHub contributions", error);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchData();
//   }, [username, year]);

//   return { data, total, loading };
// }



import { useEffect, useState } from "react";

export function useGithubContributions(username) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${username}`
        );
        const json = await res.json();

        // IMPORTANT: pass raw contributions
        setData(json.contributions);
      } catch (error) {
        console.error("Failed to fetch GitHub contributions", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [username]);

  return { data, loading };
}
