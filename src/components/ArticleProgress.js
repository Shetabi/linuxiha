import React, {useState, useEffect} from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import style from '../../styles/progress.module.scss';

export default function ArticleProgress() {
    const [progress, setProgress] = useState(0);

    function logit() {
        var body = document.body,
        html = document.documentElement;

        var height = Math.max( body.scrollHeight, body.offsetHeight);

        var currentScrollPos = window.pageYOffset;

        setProgress(currentScrollPos * 100 / (height - 700));
      }
    
      useEffect(() => {
        function watchScroll() {
          window.addEventListener("scroll", logit);
        }
        watchScroll();
        return () => {
          window.removeEventListener("scroll", logit);
        };
      });

    return (
        <div className={style.root}>
            <LinearProgress variant="determinate" value={progress} />
        </div>
    )
}
