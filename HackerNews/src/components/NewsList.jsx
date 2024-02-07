export default function NewsList({data}) {

    return (
<div>
{data.map((item)=> (

<div key={item.objectID}>
          {/* Render each news item here */}
          <a href={item.url}>{item.title}</a>
        </div>
      ))}
</div>

); 
};