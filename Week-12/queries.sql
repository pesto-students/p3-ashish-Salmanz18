/* Find the item that has minimum weight */
select * from items order by itemWeight asc limit 1;

/* Find the different warehouses in “Pune”.*/
select * from warehouse inner join city where city.cId=warehouse.cId and cityName='Pune';

/*Find the details of items ordered by a customer “Mr. Patil”.*/
select * from orders as o inner join customer as c on o.cNo = c.cNo and cName="Mr. Patil" inner join orderItem as oi on oi.oId=o.oId inner join items as i on i.itemNo=oi.itemNo;

/*Find a Warehouse which has maximum stores.*/
select w.* from warehouse as w inner join store as s on w.wId=s.wId group by w.wId order by count(w.wId) desc limit 1;

/* Find an item which is ordered for a minimum number of times.*/
select i.* from orderItem as oi inner join items as i on i.itemNo=oi.itemNo group by oi.itemNo order by count(oi.itemNo) asc limit 1;

/*Find the detailed orders given by each customer */
select c.*,i.* from customer as c inner join orders as o on c.cNo=o.cNo inner join orderItem as oi on oi.oId=o.oId inner join items as i on i.itemNo=oi.itemNo order by c.cNo;
