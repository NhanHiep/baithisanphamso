"use strict";
const menu=[['home','Tổng quan'],['error','1. Phân tích lỗi L1–L4'],['tech','2. Kỹ thuật chuẩn KTC1–KTC4'],['exercise','3. Bài tập sửa sai'],['quiz','4. Câu hỏi tương tác'],['journal','5. Phiếu luyện tập'],['video','Video quan sát'],['qr','Liên kết bài học']];let route='home',id='',quizDone=false;
const el=x=>document.querySelector(x),safe=x=>String(x??'').replace(/[&<>"']/g,s=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[s]));
const save=(k,v)=>{try{localStorage.setItem('hnue2_'+k,JSON.stringify(v))}catch{}},load=(k,f)=>{try{return JSON.parse(localStorage.getItem('hnue2_'+k))??f}catch{return f}};
function goto(r,target=''){route=r;id=target;location.hash=r+(target?'/'+target:'');render();window.scrollTo(0,0)}
function title(t,desc){return `<span class="kicker">HỌC LIỆU SỐ – KHOA GIÁO DỤC THỂ CHẤT</span><h2 class="sectiontitle">${t}</h2><p class="muted">${desc}</p>`}
function home(){return `<div class="panel hero"><span class="kicker">MÔ HÌNH HỌC THEO LỖI KỸ THUẬT</span><h2>Nhận diện đúng lỗi.<br>Đối chiếu đúng kỹ thuật.<br>Sửa sai có mục tiêu.</h2><p>Học liệu được tổ chức thành chuỗi học tập theo từng lỗi kỹ thuật chân bơi ếch, dựa vào nội dung báo cáo nghiên cứu của ThS. Lê Thị Giang.</p><button class="btn alt" data-go="error">Bắt đầu từ phân tích lỗi L1 →</button></div><div class="steps"><div class="step"><b>01</b><p>Quan sát hình minh họa lỗi, xác định biểu hiện – nguyên nhân – hậu quả.</p></div><div class="step"><b>02</b><p>Đọc và đối chiếu yêu cầu kỹ thuật chuẩn tương ứng.</p></div><div class="step"><b>03</b><p>Chọn bài tập trên cạn, dưới nước để sửa lỗi trọng tâm.</p></div><div class="step"><b>04</b><p>Trả lời câu hỏi, ghi phiếu quan sát và nhận phản hồi.</p></div></div>${title('Bốn lỗi trọng tâm','Chọn lỗi đang cần điều chỉnh để đi theo đúng một đường học tập.') }<div class="grid">${E.map(e=>`<div class="card"><span class="flag">${e.id} · BIỂU HIỆN LỖI</span><h3>${e.title}</h3><img class="errimg" loading="lazy" src="${e.image}" alt="Hình minh họa ${e.id} – ${e.title}; đây là lỗi kỹ thuật, không phải động tác chuẩn"><p class="muted">${e.symptom}</p><button class="btn" data-go="error" data-id="${e.id}">Phân tích lỗi ${e.id} →</button></div>`).join('')}</div><div class="good">Nguồn chuyên môn: báo cáo “Ứng dụng chuyển đổi số trong định hướng xây dựng học liệu lỗi kỹ thuật và bài tập sửa sai động tác chân ếch…” (ThS. Lê Thị Giang, 2026). Đây là nguyên mẫu học liệu, chưa có kết quả đánh giá thực nghiệm.</div>`}
function errors(){let e=E.find(x=>x.id===id);if(!e)return `${title('Bước 1 · Phân tích lỗi kỹ thuật','Hình ảnh ở mục này là minh họa SAI LỆCH để nhận diện lỗi, không phải kỹ thuật chuẩn.')}<div class="grid">${E.map(x=>`<div class="card"><span class="flag">HÌNH MINH HỌA LỖI · ${x.id}</span><h3>${x.title}</h3><img class="errimg" src="${x.image}" loading="lazy" alt="Hình minh họa lỗi ${x.id}"><p class="muted">${x.symptom}</p><button class="btn" data-go="error" data-id="${x.id}">Phân tích ${x.id} →</button></div>`).join('')}</div>`;return `${title('Bước 1 · '+e.id+' – '+e.title,'Quan sát và phân tích lỗi trước khi chuyển sang học kỹ thuật chuẩn.')}<div class="grid"><div class="panel"><span class="flag">HÌNH ĐỘNG TÁC SAI – DÙNG ĐỂ NHẬN DIỆN</span><img class="errimg" src="${e.image}" alt="Hình lỗi ${e.id}"><p class="small muted">Hình minh họa lỗi ${e.id}, trích từ tư liệu báo cáo của ThS. Lê Thị Giang.</p></div><div class="panel"><div class="warning"><b>BIỂU HIỆN</b><p>${e.symptom}</p></div><h3>Nguyên nhân trọng tâm</h3><p>${e.cause}</p><h3>Hậu quả</h3><p>${e.impact}</p><h3>Yêu cầu cần đạt</h3><div class="good">${e.goal}</div><button class="btn" data-go="tech" data-id="${e.kt}">Tiếp theo: Đối chiếu kỹ thuật chuẩn ${e.kt} →</button></div></div><button class="btn alt" data-go="error">← Danh sách bốn lỗi</button>`}
const ktcImages ={
    KTC1: [
        "assets/images/ktc1-thu-chan-1.jpg",
        "assets/images/ktc-1-thuchan-2.jpg",
        "assets/images/ktc1-thuchan-3.jpg",
        "assets/images/ktc1-thuchan-4.jpg",
    ],
    KTC2: [
        "assets/images/ktc2-xoaychan-1.jpg",
        "assets/images/ktc2-xoaychan-2.jpg",
        "assets/images/ktc2-xoaychan-3.jpg",
        "assets/images/ktc2-xoaychan-4.jpg",
    ],
    KTC3: [
        "assets/images/ktc3-dapchan-1.jpg",
        "assets/images/ktc3-dapchan-2.jpg",
        "assets/images/ktc3-dapchan-3.jpg",
    ],
    KTC4: [
        "assets/images/ktc4-luotnuoc-1.jpg",
    ],
}
function technical() {
  let t = K.find(x => x.id === id);

  if (!t) {
    return `
      ${title(
        'Bước 2 · Kỹ thuật chuẩn',
        'Đối chiếu các yêu cầu kỹ thuật theo báo cáo nghiên cứu.'
      )}

      <div class="grid">
        ${K.map((x, i) => `
          <div class="card">
            <span class="meta">
              ${x.id} · GIAI ĐOẠN ${i + 1}
            </span>
            <h3>${x.title}</h3>
            <p>${x.note}</p>
            <button class="btn"
              data-go="tech"
              data-id="${x.id}">
              Xem tiêu chí chuẩn →
            </button>
          </div>
        `).join('')}
      </div>
    `;
  }

  let e = E.find(x => x.kt === t.id);

  // Lấy danh sách 4 ảnh của bài học
  let images = ktcImages[t.id] || [];

  return `
    ${title(
      'Bước 2 · ' + t.id + ' – ' + t.title,
      'Đối chiếu biểu hiện lỗi vừa phân tích với yêu cầu chuyển động đúng.'
    )}

    <div class="panel">

      <span class="meta">
        MÔ TẢ KỸ THUẬT CHUẨN
      </span>

      <h2>${t.title}</h2>

      <p style="font-size:18px">
        ${t.note}
      </p>

      <!-- THƯ VIỆN 4 ẢNH KỸ THUẬT -->

      <h3>Hình ảnh minh họa kỹ thuật</h3>

      <div class="ktc-gallery">
        ${images.map((src, index) => `
          <figure class="ktc-image">
            <a href="${src}"
               target="_blank"
               rel="noopener noreferrer">

              <img
                src="${src}"
                alt="${t.title} - Hình ${index + 1}"
                loading="lazy"
              >

            </a>

            <figcaption>
              Hình ${index + 1} – ${t.title}
            </figcaption>
          </figure>
        `).join('')}
      </div>

      <!-- ĐIỂM QUAN SÁT -->

      <h3>Điểm quan sát cần đạt</h3>

      <ul>
        ${t.check.map(x => `
          <li>${x}</li>
        `).join('')}
      </ul>

      <div class="good">
        <b>Lưu ý chuyên môn:</b>
        Hình ảnh kỹ thuật chuẩn cần được giảng viên
        thẩm định trước khi sử dụng chính thức.
        Không sử dụng hình minh họa lỗi sai
        làm hình kỹ thuật mẫu.
      </div>

      <!-- ĐỐI CHIẾU LỖI -->

      <h3>Đối chiếu với lỗi vừa phân tích</h3>

      ${e ? `
        <p>
          <b>${e.id}:</b> ${e.symptom}
        </p>

        <div class="row">
          <button class="btn alt"
            data-go="error"
            data-id="${e.id}">
            ← Xem lại lỗi ${e.id}
          </button>

          <button class="btn"
            data-go="exercise"
            data-id="${e.id}">
            Tiếp theo: Bài tập sửa sai ${e.id} →
          </button>
        </div>
      ` : ''}

    </div>
  `;
}
function exercise(){let e=E.find(x=>x.id===id);if(!e)return `${title('Bước 3 · Bài tập sửa sai','Tổ chức theo lỗi trọng tâm: trên cạn → dưới nước → phối hợp và phản hồi.') }<div class="grid">${E.map(x=>`<div class="card"><span class="meta">${x.id} → ${x.dry} + ${x.wet}</span><h3>${x.title}</h3><p>${x.goal}</p><button class="btn" data-go="exercise" data-id="${x.id}">Xem bài tập →</button></div>`).join('')}</div>`;let dry=B.find(x=>x.id===e.dry),wet=B.find(x=>x.id===e.wet);return `${title('Bước 3 · Sửa sai '+e.id,'Thực hành từ đơn giản đến phức tạp dưới sự hướng dẫn và quan sát của giảng viên.')}<div class="grid"><div class="panel"><span class="meta">TRÊN CẠN · ${dry.id}</span><h3>${dry.title}</h3><p>${dry.steps}</p></div><div class="panel"><span class="meta">DƯỚI NƯỚC · ${wet.id}</span><h3>${wet.title}</h3><p>${wet.steps}</p></div></div><div class="panel"><h3>Tiêu chí sau sửa sai</h3><div class="good">${e.goal}</div><div class="warning" style="margin:13px 0">Điều chỉnh số lần, cự ly và độ khó theo năng lực người học; đảm bảo an toàn ở bể bơi. Với ${e.id==='L2'?'bài tập xoay bàn chân, không ép cổ chân hoặc gối quá giới hạn vận động tự nhiên.':'mọi bài tập dưới nước, cần có giảng viên quan sát và hướng dẫn.'}</div><button class="btn" data-go="quiz">Tiếp theo: Câu hỏi tự đánh giá →</button><button class="btn alt" data-go="journal">Mở phiếu luyện tập</button></div>`}
function practiceGallery(){return `<div class="panel"><span class="kicker">HÌNH ẢNH HỖ TRỢ THỰC HÀNH</span><h3>Tham khảo hình thức tập luyện trên cạn và quan sát tư thế</h3><p class="muted">Ảnh biên tập từ tư liệu người dùng cung cấp, sử dụng minh họa phương pháp tập. Không thay thế video chuẩn đã thẩm định.</p><div class="practice-gallery"><figure><img loading="lazy" src="assets/images/bt-tren-can-1.jpg" alt="Bài tập mô phỏng giai đoạn thu chân ở trên cạn"><figcaption>Tập mô phỏng thu chân có kiểm soát</figcaption></figure><figure><img loading="lazy" src="assets/images/bt-tren-can-2.jpg" alt="Mô phỏng tư thế chân bơi ếch trên thảm"><figcaption>Bài tập nằm sấp, nhận biết hướng chân</figcaption></figure><figure><img loading="lazy" src="assets/images/bt-co-chan.jpg" alt="Tập nhận biết tư thế cổ chân ở bên bể bơi"><figcaption>Thả lỏng và nhận biết tư thế cổ chân</figcaption></figure></div></div>`}
function quiz(){return `${title('Bước 4 · Câu hỏi tương tác','Đọc tình huống bằng chữ, xác định lỗi và chọn hướng sửa sai. Không chiếu hình lỗi sai thay cho hình kỹ thuật chuẩn.') }<div class="panel"><div class="good">Các câu hỏi này dựa trên biểu hiện, nguyên nhân, bài tập trong báo cáo. Chỉ những câu hỏi có yêu cầu “quan sát hình nhận diện lỗi” mới nên sử dụng ảnh lỗi có nhãn rõ ràng; bộ câu hỏi hiện tại trình bày tình huống bằng chữ để tránh nhầm lẫn.</div><form id="quizForm">${Q.map((q,i)=>`<section class="quizq"><h3>Câu ${i+1}. ${safe(q.q)}</h3>${q.a.map((a,j)=>`<label class="choice"><input type="radio" name="q${i}" value="${j}" required> ${safe(a)}</label>`).join('')}</section>`).join('')}<button class="btn" type="submit">Chấm điểm và giải thích</button><button class="btn alt" type="button" id="reset">Làm lại</button></form><div id="quizResult" aria-live="polite"></div></div>`}
function journal(){let entries=load('entries',[]);return `${title('Phiếu luyện tập và nhận xét','Mẫu ghi chép cá nhân; dữ liệu chỉ được lưu trên thiết bị đang sử dụng.') }<div class="grid"><div class="panel"><form id="journalForm"><label class="field">Họ tên / Mã sinh viên<input name="name" required maxlength="100" placeholder="Nhập thông tin"></label><label class="field">Lỗi được sửa<select name="error">${E.map(e=>`<option value="${e.id}">${e.id} – ${e.title}</option>`).join('')}</select></label><label class="field">Biểu hiện quan sát<textarea name="observe" required placeholder="Mô tả lỗi ở buổi học"></textarea></label><label class="field">Bài tập đã thực hiện<textarea name="practice" required placeholder="Ghi mã BTc/BTn và cách thực hiện"></textarea></label><label class="field">Tự đánh giá<select name="status"><option>Cần tiếp tục sửa sai</option><option>Đã tiến bộ, cần củng cố</option><option>Đạt yêu cầu theo nhận xét giảng viên</option></select></label><label class="field">Nhận xét giảng viên (nếu có)<textarea name="teacher" placeholder="Giảng viên ghi sau khi quan sát thực hành"></textarea></label><button class="btn" type="submit">Lưu phiếu trên thiết bị</button><button class="btn alt" type="button" id="export">Xuất nhật ký CSV</button></form></div><div class="panel"><h3>Nhật ký đã lưu (${entries.length})</h3>${entries.length?entries.slice(0,12).map(x=>`<div class="stage"><b>${safe(x.error)} · ${safe(x.name)} · ${safe(x.date)}</b><p class="small">Quan sát: ${safe(x.observe)}<br>Bài tập: ${safe(x.practice)}<br>Tự đánh giá: ${safe(x.status)}<br>Giảng viên: ${safe(x.teacher)||'Chưa có'}</p></div>`).join(''):'<p class="muted">Chưa có dữ liệu.</p>'}<div class="warning">Đây chưa phải hệ thống đồng bộ tài khoản hay phản hồi trực tuyến. Khi dùng dữ liệu sinh viên thật, cần đáp ứng quy định bảo vệ thông tin cá nhân.</div></div></div>`}
function videos(){return `${title('Video quan sát – học liệu bổ trợ','Đoạn phim nguồn dùng để luyện quan sát; KHÔNG được xác nhận là video kỹ thuật chuẩn cho KTC1–KTC4.') }<div class="panel"><video id="vid" controls playsinline preload="metadata" src="${V}"></video><div class="row"><b>Tốc độ phát:</b>${[.25,.5,.75,1,1.25].map(s=>`<button class="btn alt" data-speed="${s}">${s}×</button>`).join('')}</div><div class="warning">Video 13 giây trích từ tư liệu bài trình chiếu. Video chuẩn riêng từng giai đoạn và từng lỗi cần được ghi hình, thẩm định chuyên môn trước khi công bố như học liệu chính thức.</div></div>`}
function qr(){return `${title('Liên kết truy cập bài học','Khi website được đưa lên địa chỉ HTTPS công khai, có thể tạo QR tới từng lỗi hoặc bài học.') }<div class="panel"><label class="field">Địa chỉ website công khai<input id="base" type="url" placeholder="https://ten-mien-cua-ban.vn/boi-ech/" value="${/^https?:$/.test(location.protocol)?safe(location.href.split('#')[0]):''}"></label><label class="field">Nội dung đích<select id="target">${E.map(e=>`<option value="error/${e.id}">${e.id} · ${e.title}</option>`).join('')}${K.map(k=>`<option value="tech/${k.id}">${k.id} · ${k.title}</option>`).join('')}</select></label><button class="btn" id="makeLink">Tạo đường dẫn bài học</button><p id="linkResult" class="muted" style="overflow-wrap:anywhere"></p><div class="qr-area"><canvas id="qrCanvas" width="260" height="260" aria-label="Mã QR truy cập bài học"></canvas><a id="downloadQr" class="btn alt hide" download="QR_Boi_Ech_HNUE.png">Tải ảnh QR PNG</a></div><p class="muted">Dùng đường dẫn đã tạo trong công cụ QR được trường chấp thuận. File HTML chạy ngoại tuyến không có URL công khai để sinh QR cho sinh viên.</p></div>`}
function render(){el('#nav').innerHTML=menu.map(([r,label])=>`<button class="${r===route?'active':''}" data-go="${r}">${label}</button>`).join('');let views={home,error:errors,tech:technical,exercise,quiz,journal,video:videos,qr};el('#main').innerHTML=(views[route]||home)()+(route==='exercise'?practiceGallery():'')+`<footer>© 2026 · HỌC LIỆU MẪU – KHOA GIÁO DỤC THỂ CHẤT, TRƯỜNG ĐẠI HỌC SƯ PHẠM HÀ NỘI.<br>Nguồn nội dung: báo cáo nghiên cứu của ThS. Lê Thị Giang (2026). Bộ học liệu hiện ở giai đoạn thiết kế, chưa có kiểm chứng hiệu quả bằng thực nghiệm.</footer>`;if(route==='quiz'){el('#quizForm').onsubmit=e=>{e.preventDefault();let d=new FormData(e.target),n=0,res=[];Q.forEach((q,i)=>{let answer=Number(d.get('q'+i));if(answer===q.ok)n++;res.push(`<p><b>Câu ${i+1}: ${answer===q.ok?'Đúng':'Chưa đúng'}.</b> ${q.why}</p>`)});el('#quizResult').innerHTML=`<div class="result"><h3>Kết quả: ${n}/${Q.length} câu</h3>${res.join('')}<button class="btn alt" type="button" data-go="journal">Ghi phiếu luyện tập →</button></div>`;save('quiz',{score:n,total:Q.length,date:new Date().toLocaleString('vi-VN')});el('#quizResult').scrollIntoView({block:'start',behavior:'smooth'})};el('#reset').onclick=()=>render()}if(route==='journal')bindJournal();if(route==='qr')el('#makeLink').onclick=()=>{try{let u=new URL(el('#base').value.trim());if(!/^https?:$/.test(u.protocol))throw Error();u.hash=el('#target').value;el('#linkResult').textContent=u.href; QRCodeOffline.draw(u.href,el('#qrCanvas')); const link=el('#downloadQr'); link.href=el('#qrCanvas').toDataURL('image/png'); link.classList.remove('hide')}catch{el('#linkResult').textContent='Cần nhập URL http(s) hợp lệ.'}};}
function bindJournal(){el('#journalForm').onsubmit=e=>{e.preventDefault();const d=new FormData(e.target),v=Object.fromEntries(d.entries());v.date=new Date().toLocaleString('vi-VN');let a=load('entries',[]);a.unshift(v);save('entries',a);render()};el('#export').onclick=()=>{let a=load('entries',[]);if(!a.length){alert('Chưa có phiếu để xuất.');return}let keys=['date','name','error','observe','practice','status','teacher'],escCsv=x=>'"'+String(x??'').replaceAll('"','""')+'"';let csv='﻿'+[keys.join(','),...a.map(v=>keys.map(k=>escCsv(v[k])).join(','))].join('\r\n');let url=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8'}));let link=document.createElement('a');link.href=url;link.download='Phieu_luyen_tap_Boi_Ech.csv';link.click();setTimeout(()=>URL.revokeObjectURL(url),1000)}}
document.addEventListener('click',e=>{let b=e.target.closest('[data-go]');if(b){e.preventDefault();goto(b.dataset.go,b.dataset.id||'')}let s=e.target.closest('[data-speed]');if(s){let v=el('#vid');if(v)v.playbackRate=Number(s.dataset.speed)}});function boot(){let [r,part]=decodeURIComponent(location.hash.slice(1)).split('/');route=menu.some(x=>x[0]===r)?r:'home';id=part||'';render()}window.addEventListener('hashchange',boot);boot();
