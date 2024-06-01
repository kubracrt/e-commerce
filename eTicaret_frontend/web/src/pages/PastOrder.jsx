import axios from "axios";
import React, { useState, useEffect } from "react";
import { useUserId } from "../redux/auth/hooks";

const PastOrder = () => {
  const [pastOrders, setPastOrders] = useState([]);
  const kisi_id = useUserId();

  useEffect(() => {
    if (kisi_id) {
      loadPastOrders();
    }
  }, [kisi_id]);

  const loadPastOrders = async () => {
    const result = await axios.get(
      `http://localhost:8080/pastOrder/${kisi_id}`
    );
    setPastOrders(Array.isArray(result.data) ? result.data : [result.data]);
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("tr-TR");
  };

  return (
    <div>
      <h1 className="text-2xl bg-gray-50 text-gray-500 mb-8 mt-8 ">Geçmiş Siparişlerim</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-s font-medium text-gray-500 uppercase tracking-wider">
              Sıra
            </th>
            <th className="px-6 py-3 text-left text-s font-medium text-gray-500 uppercase tracking-wider">
              Tutar
            </th>
            <th className="px-6 py-3 text-left text-s font-medium text-gray-500 uppercase tracking-wider">
              Tarih
            </th>
            <th className="px-6 py-3 text-left text-s font-medium text-gray-500 uppercase tracking-wider">
              Ürün Adı
            </th>
            <th className="px-6 py-3 text-left text-s font-medium text-gray-500 uppercase tracking-wider">
              Ürün Açıklaması
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {pastOrders.length > 0 ? (
            pastOrders.map((order, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap">{order.tutar}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {formatDate(order.tarih)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {order.urunAdi}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {order.urunAciklamasi}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="px-6 py-4 whitespace-nowrap" colSpan="4">
                Hiç geçmiş siparişiniz bulunmamaktadır.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PastOrder;
