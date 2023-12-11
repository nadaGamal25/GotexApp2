import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import * as XLSX from 'xlsx';
import * as ExcelJS from 'exceljs';
// import * as XLSXStyle from 'xlsx-style';

export default function ShipmentsAdmin() {
  const [shipmentsAdmin,setShipmentsAdmin]=useState([])
    const [theLimit,setLimit]=useState(30)
    const [currentPage, setCurrentPage] = useState(Number(1));
    const [numberOfPages, setNumberOfPages] = useState(1);
    const [loading, setLoading] = useState(false);
    const [searchCompany, setSearchCompany] = useState('');
const [searchPaytype, setSearchPaytype] = useState('');
const [searchBillCode, setSearchBillCode] = useState('');
const [currentPage2, setCurrentPage2] = useState(Number(1));
    const [numberOfPages2, setNumberOfPages2] = useState(1);
const [secondFilter, setSecondFilter] = useState(false);
    const [clientFilter, setClientFilter] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');


    async function getShipmentsAdmin() {
        try {
          setLoading(true);
          const response = await axios.get(`https://dashboard.go-tex.net/gotex-co-test/admin/orders`, {
            params: {
                page: currentPage,
                limit: 30,
                
              },
            headers: {
              Authorization: `Bearer ${localStorage.getItem('userToken')}`,
            },
          });
      
          setShipmentsAdmin(response.data.data);
          setSecondFilter(false)
          console.log(response)
          setCurrentPage(response.data.pagination.currentPage);
          setNumberOfPages(response.data.pagination.numberOfPages);
        } catch (error) {
          console.error('Error fetching students:', error);
        } finally {
          setLoading(false); 
        }
      }
      async function getSearchShipmentsAdmin() {
        try {
          setLoading(true);
          const response = await axios.get(`https://dashboard.go-tex.net/gotex-co-test/admin/orders`, {
            params: {
                page: 1,
                limit: 30,
                company: searchCompany,
                paytype: searchPaytype,
                billCode: searchBillCode,
                keyword:clientFilter,
                startDate:startDate,
                endDate:endDate,
              },
            headers: {
              Authorization: `Bearer ${localStorage.getItem('userToken')}`,
            },
          });
      
          setShipmentsAdmin(response.data.data);
          setSecondFilter(true)
          console.log(response)
          setCurrentPage2(response.data.pagination.currentPage);
          setNumberOfPages2(response.data.pagination.numberOfPages);
        } catch (error) {
          console.error('Error fetching students:', error);
        } finally {
          setLoading(false); 
        }
      }
      async function getSearchShipmentsPage() {
        try {
          setLoading(true);
          const response = await axios.get(`https://dashboard.go-tex.net/gotex-co-test/admin/orders`, {
            params: {
                page: currentPage2,
                limit: 30,
                company: searchCompany,
                paytype: searchPaytype,
                billCode: searchBillCode,
                keyword:clientFilter,
                startDate:startDate,
                endDate:endDate,
              },
            headers: {
              Authorization: `Bearer ${localStorage.getItem('userToken')}`,
            },
          });
      
          setShipmentsAdmin(response.data.data);
          setSecondFilter(true)
          console.log(response)
          setCurrentPage2(response.data.pagination.currentPage);
          setNumberOfPages2(response.data.pagination.numberOfPages);
        } catch (error) {
          console.error('Error fetching students:', error);
        } finally {
          setLoading(false); 
        }
      }
    useEffect(() => {
        getShipmentsAdmin();
    }, []);
  
    
    const handlePreviousPage = async () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1); 
        try {
          setLoading(true);
          const response = await axios.get(`https://dashboard.go-tex.net/gotex-co-test/admin/orders`, {
            params: {
                page: currentPage -1,
                limit: 30,
                
              },
            headers: {
              Authorization: `Bearer ${localStorage.getItem('userToken')}`,
            },
          });
      
          setShipmentsAdmin(response.data.data);
          setSecondFilter(false)
          console.log(response)
          setCurrentPage(response.data.pagination.currentPage);
          setNumberOfPages(response.data.pagination.numberOfPages);
        } catch (error) {
          console.error('Error fetching students:', error);
        } finally {
          setLoading(false); 
        }
      }
    };
    const handleNextPage = async () => {
      if (currentPage < numberOfPages) {
        setCurrentPage(currentPage + 1);
        try {
          setLoading(true);
          const response = await axios.get(`https://dashboard.go-tex.net/gotex-co-test/admin/orders`, {
            params: {
                page: currentPage +1,
                limit: 30,
                
              },
            headers: {
              Authorization: `Bearer ${localStorage.getItem('userToken')}`,
            },
          });
      
          setShipmentsAdmin(response.data.data);
          setSecondFilter(false)
          console.log(response)
          setCurrentPage(response.data.pagination.currentPage);
          setNumberOfPages(response.data.pagination.numberOfPages);
        } catch (error) {
          console.error('Error fetching students:', error);
        } finally {
          setLoading(false); 
        }
      }
    };
    const handlePreviousPage2 = async () => {
  if (currentPage2 > 1) {
    setCurrentPage2(currentPage2 - 1); 
    try {
      setLoading(true);
      const response = await axios.get(`https://dashboard.go-tex.net/gotex-co-test/admin/orders`, {
        params: {
            page: currentPage2 -1,
            limit: 30,
            company: searchCompany,
            paytype: searchPaytype,
            billCode: searchBillCode,
            keyword:clientFilter,
            startDate:startDate,
            endDate:endDate,
          },
        headers: {
          Authorization: `Bearer ${localStorage.getItem('userToken')}`,
        },
      });
  
      setShipmentsAdmin(response.data.data);
      setSecondFilter(true)
      console.log(response)
      setCurrentPage2(response.data.pagination.currentPage);
      setNumberOfPages2(response.data.pagination.numberOfPages);
    } catch (error) {
      console.error('Error fetching students:', error);
    } finally {
      setLoading(false); 
    }
  }
};
const handleNextPage2 = async () => {
  if (currentPage2 < numberOfPages2) {
    setCurrentPage2(currentPage2 + 1) 
    try {
      setLoading(true);
      const response = await axios.get(`https://dashboard.go-tex.net/gotex-co-test/admin/orders`, {
        params: {
            page: currentPage2 +1,
            limit: 30,
            company: searchCompany,
            paytype: searchPaytype,
            billCode: searchBillCode,
            keyword:clientFilter,
            startDate:startDate,
            endDate:endDate,
          },
        headers: {
          Authorization: `Bearer ${localStorage.getItem('userToken')}`,
        },
      });
  
      setShipmentsAdmin(response.data.data);
      setSecondFilter(true)
      console.log(response)
      setCurrentPage2(response.data.pagination.currentPage);
      setNumberOfPages2(response.data.pagination.numberOfPages);
    } catch (error) {
      console.error('Error fetching students:', error);
    } finally {
      setLoading(false); 
    }  
  }
};
   
//
const exportToExcel = async () => {
  try {
    setLoading(true);

    // Make the search request
    const response = await axios.get('https://dashboard.go-tex.net/gotex-co-test/admin/orders', {
      params: {
        page: 1,
        limit: 5000,
        company: searchCompany,
        paytype: searchPaytype,
        billCode: searchBillCode,
        keyword: clientFilter,
        startDate: startDate,
        endDate: endDate,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem('userToken')}`,
      },
    });
    setShipmentsAdmin(response.data.data);
    setSecondFilter(true)
    console.log(response)
    setCurrentPage2(response.data.pagination.currentPage);
    setNumberOfPages2(response.data.pagination.numberOfPages);
    const dataToExport = response.data.data.map((item, index) => {
      return [
        item.created_at ? item.created_at.slice(0, 10) : '_',
        item.user && item.user.name ? item.user.name : '_',
        item.company === "anwan" ? 'gotex' : item.company || '_',
        item.data && item.data.awb_no ? item.data.awb_no : (item.data && item.data.data && item.data.data.expressNo ? item.data.data.expressNo : (item.data && item.data.Items && item.data.Items[0]?.Barcode ? item.data.Items[0].Barcode : (item.data && item.data.waybill ? item.data.waybill : (item.data && item.data.data && item.data.data.billCode ? item.data.data.billCode : (item.data && item.data.orderTrackingNumber ? item.data.orderTrackingNumber : (item.data && item.data.Shipments && item.data.Shipments[0]?.ID ? item.data.Shipments[0].ID : (item.data && item.data.sawb ? item.data.sawb : '_'))))))),
        item.status || '_',
        item.paytype || '_',
        item.user && item.user.mobile || '_',
        item.user && item.user.email || '_',
        item.price || '_',
      ];
    });

    // Create a worksheet
    const ws = XLSX.utils.aoa_to_sheet([[ 'التاريخ', 'العميل', 'شركة الشحن', 'رقم التتبع', 'حالة الشحنة', 'طريقة الدفع', 'الهاتف', 'الايميل', 'السعر'], ...dataToExport]);

    // Set column styles
    ws['!cols'] = [
      { wch: 18 },{ wch: 18 },{ wch: 18 },
      { wch: 18 },{ wch: 18 },{ wch: 18 },
      { wch: 18 },{ wch: 18 },{ wch: 18 },
       // Set column width to 150 pixels
      // Add more columns as needed
    ];

// Log the entire ws array to the console
// console.log('ws array:', ws);
// const range = XLSX.utils.decode_range(ws['!ref']);

// for (let row = range.s.r; row <= range.e.r; row++) {
//   for (let col = range.s.c; col <= range.e.c; col++) {
//     const cellRef = XLSX.utils.encode_cell({ r: row, c: col });
//     const cellValue = ws[cellRef]?.v; // Get cell value

//     console.log('Checking cell at row:', row + 1, 'column:', col + 1, 'with value:', cellValue);

//     if (cellValue !== undefined && cellValue !== null) {
//       const cellText = String(cellValue).toLowerCase(); // Convert to string and lowercase

//       if (cellText === 'canceled') {
//         console.log('Found "canceled" at row:', row + 1, 'column:', col + 1);
//         ws[cellRef].s = {
//           font: { color: { rgb: 'FF0000' } }, // Set text color to red
//           fill: { fgColor: { rgb: 'FFCACADD' } }, // Set background color
//         };
//       }
//     }
//   }
// }



    // Create a workbook and add the worksheet
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet 1');

    // Save the workbook to a file
    XLSX.writeFile(wb, 'orders.xlsx');
  } catch (error) {
    console.error('Error exporting to Excel:', error);
  } finally {
    setLoading(false);
  }
};


 return (
    <>
         <div className='p-4' id='content'>
    <div className="gray-box p-4 mb-4">
      <div className="row">
        <div className="col-md-4">
        <select className='form-control m-1' name="" id="" onChange={(e) => setSearchCompany(e.target.value)}>
<option value="">شركة الشحن</option>
<option value="saee">saee</option>
<option value="anwan">gotex</option>
<option value="smsa">smsa</option>
<option value="aramex">aramex</option>
<option value="imile">imile</option>
<option value="jt">jt</option>
<option value="spl">spl</option>
</select>          
        </div>
        <div className="col-md-4">
          <input className='form-control m-1' 
          type="search" placeholder="الاسم , الايميل ,الهاتف"
          // value={clientFilter}
          onChange={(e) => setClientFilter(e.target.value)}
          />
        </div>
        
       
        <div className="col-md-4">
          <input className='form-control m-1' type="search"
            placeholder="رقم التتبع"
            //   value={searchBillCode}
              onChange={(e) => setSearchBillCode(e.target.value)} />
        </div>
        
        <div className="col-md-4">
        <select className='form-control m-1' onChange={(e) => setSearchPaytype(e.target.value)}>
<option value="">طريقة الدفع (الكل)</option>
<option value="cc">cc</option>
<option value="cod">cod</option>
</select> 
       </div>
        
        
        <div className="col-md-8 p-1">
          <label>
  التاريخ من:
  <input
    type="date"
    // value={startDate}
    onChange={(e) => setStartDate(e.target.value)}
    max={endDate || undefined}
  />
</label>
<label>
  الى:
  <input
    type="date"
    // value={endDate}
    onChange={(e) => setEndDate(e.target.value)}
    min={startDate || undefined}
  />
</label>

        </div>
        <div className="text-center mt-1">
        <button className="btn btn-dark-blue m-1" onClick={getSearchShipmentsAdmin}>
            بحث
        </button>
        <button className="btn btn-orange" onClick={exportToExcel}>بحث وتصدير ملف اكسيل</button>         
</div>
      </div>
    </div>
    <div className="gray-table p-4 my-4">
        <button className="btn btn-addPiece m-1" onClick={getShipmentsAdmin}>عرض جميع الشحنات  </button>

          <table className="table" id="table-to-export">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">التاريخ</th>
                <th scope="col">العميل</th>
                <th scope="col">
                  شركة الشحن</th>
                <th scope="col">
                  رقم التتبع</th>
                <th scope="col">
                  حالة الشحنة </th>
                <th scope="col">
                  طريقة الدفع</th>
                <th scope="col">
                  الهاتف</th>
                <th scope="col">
                  الايميل</th>
                <th scope="col">
                  السعر</th>
                
                {/* <th scope="col">id_الفاتورة</th>   */}
                <th scope="col"></th>              
              </tr>
            </thead>
            <tbody>
            {shipmentsAdmin && shipmentsAdmin.map((item, index) => (
  <tr key={index} className={item.status === "canceled" ? 'cancel' : ''}>
    {loading ? (
      <td>
        <i className="fa-solid fa-spinner fa-spin"></i>
      </td>
    ) : (
      <>
        <td>{index+1}</td>
                {
//                 item.createdate ? (<td>{item.createdate.slice(0, 10)}</td>
// ) : item.data && item.data.createDate ? (
//   <td>{item.data.createDate.slice(0, 10)}</td>):
   item.created_at ? (
    <td>{item.created_at.slice(0, 10)}</td>) : (<td>_</td>)}
                {item.user && item.user.name ? <td>{item.user.name}</td> : <td>_</td>}
                {item.company ==="anwan"?<td>gotex</td>:<td>{item.company}</td>}
                {/* {item.company?<td>{item.company}</td>:<td>_</td>} */}
                {item.data && item.data.awb_no ? (
  <td>{item.data.awb_no}</td>
): item.data.data && item.data.data.expressNo? (
  <td>{item.data.data.expressNo}</td>
): item.data && item.data.Items && item.data.Items[0]?.Barcode? (
  <td>{item.data.Items[0].Barcode}</td>
)
 : item.data && item.data.waybill ? (
  <td>{item.data.waybill}</td>
) :item.data.data && item.data.data.billCode?(
    <td>{item.data.data.billCode}</td>
) : item.data && item.data.orderTrackingNumber ? (
  <td>{item.data.orderTrackingNumber}</td>
) : item.data && item.data.Shipments && item.data.Shipments[0]?.ID ? (
  <td>{item.data.Shipments[0].ID}</td>
) : item.data && item.data.sawb ? (
  <td>{item.data.sawb}</td>
) : (
  <td>_</td>
)}
               {item.status?<td >{item.status}</td>:<td>_</td>}
               {/* className={item.status=== "canceled" ?' text-danger fw-bold':''} */}
                {item.paytype?<td>{item.paytype}</td>:<td>_</td>}

                {item.user && item.user.mobile?<td>{item.user.mobile}</td>:<td>_</td>}
                {item.user && item.user.email?<td>{item.user.email}</td>:<td>_</td>}
                {item.price?<td>{item.price}</td>:<td>_</td>}
        {/* {item.inovicedaftra?.id?(<td>{item.inovicedaftra.id}</td>):(<td>_</td>)} */}
        {item.status=== "canceled" ?<td><span className='text-center text-danger fw-bold'> x </span> </td> : <td></td>}
            
      </>
    )}
  </tr>
))}         
        </tbody>
      </table>
      {secondFilter?(
      <div>
        <button className="btn btn-dark-blue" onClick={handlePreviousPage2} disabled={currentPage2 === 1}>
          الصفحة السابقة 
        </button>
        <span className='px-1'>
          Page {currentPage2} of {numberOfPages2}
        </span>
        <button className="btn btn-dark-blue" onClick={handleNextPage2} disabled={currentPage2 === numberOfPages2}>
          الصفحة التالية 
        </button>
      </div>
      ):
      (
        <div>
        <button className="btn btn-dark-blue" onClick={handlePreviousPage} disabled={currentPage === 1}>
          الصفحة السابقة 
        </button>
        <span className='px-1'>
          Page {currentPage} of {numberOfPages}
        </span>
        <button className="btn btn-dark-blue" onClick={handleNextPage} disabled={currentPage === numberOfPages}>
          الصفحة التالية 
        </button>
      </div>
      )}
      <div>
<input className=' m-1' type="number" 

placeholder="رقم الصفحة "
onChange={(e) => setCurrentPage2(e.target.value)} />
<button className="btn btn-primary m-1" onClick={getSearchShipmentsPage}>
            بحث برقم الصفحة
        </button>
      </div>
     </div>

    </div>
    </>
  )
}



    // useEffect(()=>{
    //     getAdminOrders()
    //   },[])
    //           const [orders,setOrders]=useState('')
    //       async function getAdminOrders() {
    //         try {
    //           const response = await axios.get('https://dashboard.go-tex.net/gotex-co-test/admin/orders/get-all',
    //           {
    //             headers: {
    //               Authorization: `Bearer ${localStorage.getItem('userToken')}`,
    //             },
    //           });
    //           console.log(response.data.data.orders)
    //           setOrders(response.data.data.orders)
    //         } catch (error) {
    //           console.error(error);
    //         }
    //       }

// <div className="gray-table p-4 my-4">
// <table className="table">
//   <thead>
//     <tr>
//       <th scope="col">#</th>
//       <th scope="col">
//         الشركة
//       </th>
//       <th scope="col">
//         العميل
//       </th>
//       <th scope="col">
//         الهاتف
//       </th>
//       <th scope="col">
//         الايميل

//       </th>
//       <th scope="col">
//         السعر
//       </th>
//       <th scope="col">
//         رقم التتبع
//       </th>
      
//       <th scope="col">
//         طريقة الدفع
//       </th>
//       <th scope="col">التاريخ</th>
//       {/* <th scope="col">id_الفاتورة</th>                 */}
//     </tr>
//   </thead>
//   <tbody>
//     {orders && orders.map((item, index) => {
//   return(
//     <tr key={index}>
//       <td>{index+1}</td>
//       {item.company?<td>{item.company}</td>:<td>_</td>}
//       {item.user && item.user.name ? <td>{item.user.name}</td> : <td>_</td>}
//       {item.user && item.user.mobile?<td>{item.user.mobile}</td>:<td>_</td>}
//       {item.user && item.user.email?<td>{item.user.email}</td>:<td>_</td>}
//       {item.price?<td>{item.price}</td>:<td>_</td>}
      
// {item.data && item.data.awb_no ? (
// <td>{item.data.awb_no}</td>
// ) : item.data && item.data.waybill ? (
// <td>{item.data.waybill}</td>
// ) : item.data && item.data.orderTrackingNumber ? (
// <td>{item.data.orderTrackingNumber}</td>
// ) : item.data && item.data.Shipments && item.data.Shipments[0]?.ID ? (
// <td>{item.data.Shipments[0].ID}</td>
// ) : item.data && item.data.sawb ? (
// <td>{item.data.sawb}</td>
// ) : (
// <td>_</td>
// )}

//       {item.paytype?<td>{item.paytype}</td>:<td>_</td>}
//       {item.createdate ? (<td>{item.createdate.slice(0, 15)}</td>
// ) : item.data && item.data.createDate ? (
// <td>{item.data.createDate.slice(0, 10)}</td>) : (<td>_</td>)}
// {/* {item.inovicedaftra?.id?(<td>{item.inovicedaftra.id}</td>):(<td>_</td>)} */}

//     </tr>
//   )
// }
// )}
// </tbody>
// </table>
// </div>

